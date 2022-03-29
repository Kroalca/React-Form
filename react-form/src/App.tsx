import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CardPerson from './components/CardPerson';
import './App.css'
import React, { useState } from 'react';

interface Person {
  name: string;
  surnames: string;
  email: string;
  gender: string;
  details?: string;
}

function App() : JSX.Element {
  const {register, handleSubmit, formState: {errors}} = useForm<Person>();
  const [person, setPerson] = useState<Person>();
  const onSubmit : SubmitHandler<Person> = (data) => setPerson(data);


  return (
    <React.Fragment>
      <div className='formReact'>
        <Typography variant="h1" component="div" gutterBottom align='center'>Formulario</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>

          <TextField sx={{my: 1}} fullWidth  id="name" label="Nombre" variant="outlined" 
          {...register("name", 
            { required: 
              { value: true, message: "Inserte un nombre"}
            })
          }
          {...(errors.name ? { helperText:errors.name.message, error:true } : {})}/>
          
          <TextField sx={{my: 1}} fullWidth id="surnames" label="Apellidos" variant="outlined"
          {...register("surnames", 
            { required: 
                { value: true, message: "Inserte un apellido"}
            })
          }
          {...(errors.surnames ? { helperText:errors.surnames.message, error:true } : {})}/>
          <TextField sx={{my: 1}} fullWidth id="email" label="Email" variant="outlined" 
          {...register("email", 
            { required: 
              { value: true, message: "Inserte un email"},
              pattern:
                {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i , message: "Tine que ser un email valido"}
            })
          }
          {...(errors.email ? { helperText:errors.email.message, error:true } : {})}/>

          <FormControl sx={{my: 1}}>
            <FormLabel id="gender">Genero</FormLabel>
            <RadioGroup
              row
              aria-labelledby="gender"
              defaultValue="Mujer"
              name="gender"
            >
              <FormControlLabel value="Mujer" control={<Radio />} label="Mujer" {...register("gender")} />
              <FormControlLabel value="Hombre" control={<Radio />} label="Hombre" {...register("gender")}/>
              <FormControlLabel value="Otro" control={<Radio />} label="Otro" {...register("gender")}/>
            </RadioGroup>
          </FormControl>

          <TextField  sx={{my: 1}} fullWidth id="details" label="Detalles" variant="outlined" multiline rows={6} {...register("details")}/>

          <Button type='submit' sx={{my: 1}} fullWidth variant="contained" endIcon={<SendIcon />}>Enviar</Button>
        </form>
        {person && <CardPerson {...person} />}
      </div>
    </React.Fragment>
  );
}

export default App;
