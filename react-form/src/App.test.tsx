import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('APP form component' , () => {
  beforeEach(() => render(<App />));

  it('Form text view', () => {
    const linkElement = screen.getByText(/formulario/i);
    expect(linkElement).toBeInTheDocument();

  });

  it('Ckeck Input Name', () => {
    const inputName = screen.getByLabelText(/nombre/i);
    expect(inputName).toBeInTheDocument();

  });

  it('Check for the button', () => {
    const button = screen.getByRole("button", {name: /enviar/i})
    expect(button).toBeInTheDocument();

  });

  it('Ckeck Error Message', async () => {
    const button = screen.getByRole("button", {name: /enviar/i})
    
    userEvent.click(button);

    expect(await screen.findByText(/inserte un nombre/i)).toBeInTheDocument();

  });

  it('Check no error Message', async () => {
    userEvent.type(screen.getByLabelText(/email/i), "test@gmail.es");
    userEvent.type(screen.getByLabelText(/nombre/i), "test");
    userEvent.type(screen.getByLabelText(/apellido/i), "Test unitario");
    const button = screen.getByRole("button", {name: /enviar/i})
    
    userEvent.click(button);

    expect(screen.queryByText(/inserte/i)).not.toBeInTheDocument();    

  })
})

