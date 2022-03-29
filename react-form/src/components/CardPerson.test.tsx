import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardPerson from './CardPerson';

const Person = {
    name: 'TestName',
    surnames: 'Unitario',
    email: 'test@gmail.es',
    gender: 'Otro',
    details: 'try with test'
}

describe('CardPerson component after submit date', () =>{
    it('dont exits', () => {
        render(<CardPerson {...Person}/>);
        const name = screen.getByText(/testname/i);
        expect(name).toBeInTheDocument();
    })
})
