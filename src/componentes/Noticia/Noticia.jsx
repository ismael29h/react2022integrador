import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { DEFAULT_IMAGE } from '../../libs/constantes';
import { useNavigate } from 'react-router-dom';


const Noticia = ({
  noticia,
  onChange
}) => {
    const onCardClick = () => {
      onChange && onChange(noticia);
    };

    return (
      <Card sx={{ width: 250, marginBottom: 10 }}>
        <CardActionArea onClick={onCardClick}>
          <CardMedia
            component="img"
            height="140"
            width={250}
            image={noticia.urlToImage  === 'NA' ? DEFAULT_IMAGE : noticia.urlToImage}
            alt={noticia.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {noticia.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {noticia.source.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {noticia.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export const ListaNoticias = ({ noticias }) => {
    const navigate = useNavigate();
    const onNoticiasClick = ({ imdbID }) => {
      navigate(`/noticias/${imdbID}`);
    }
    return (
      <section style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '20px',
      }}>
        {
          noticias.map((noticia) => {
            return <Noticia noticia={noticia} onChange={onNoticiasClick}/>
        })
        }
      </section>
    )
}

export default Noticia;