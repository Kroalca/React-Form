import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface Person {
    name: string;
    surnames: string;
    email: string;
    gender: string;
    details?: string;
}


export default function CardPerson(props : Person) {
    return (
    <Box sx={{ width: 400, my:3 }}>
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">{props.name} {props.surnames}</Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">{props.gender}</Typography>
                <Typography variant="body2">
                {props.email}
                <br /><br />
                {props.details}
                </Typography>
            </CardContent>
        </Card>
    </Box>
    );
}