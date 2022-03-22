import * as React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './App.css'

function App() : JSX.Element {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = (data : any) => console.log(data);

  return (
    <div className='formReact'>
      <Typography variant="h1" component="div" gutterBottom>Formulario</Typography>
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
            name="gender"
          >
            <FormControlLabel value="female" control={<Radio />} label="Mujer" />
            <FormControlLabel value="male" control={<Radio />} label="Hombre" />
            <FormControlLabel value="other" control={<Radio />} label="Otro" />
          </RadioGroup>
        </FormControl>

        <TextField  sx={{my: 1}} fullWidth id="details" label="Detalles" variant="outlined" multiline rows={6} 
        {...register("details")
        }/>

        <Button type='submit' sx={{my: 1}} fullWidth variant="contained" endIcon={<SendIcon />}>Enviar</Button>
      </form>
    </div>
  );
}

export default App;
