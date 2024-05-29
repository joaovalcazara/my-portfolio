import { Button, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/eu_img.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
    const Hero = () => { 

    const StyledHero = styled("div")(()=>({
        backgroundColor:"black",
        height:"100vh"

    }))

    const StyledImg = styled("img")(()=>({
        width:"100%",
        borderRadius:"50%"
    }))


    return(
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={4}> 
                            <StyledImg src={Avatar}/> 
                        </Grid>
                        <Grid item xs={8}> 
                            <Typography>João Francisco Valcazara Prestes</Typography>
                            <Typography>I'm a Full Stack Developer</Typography>
                            <Grid container display="flax" justifyContent="center">
                                <Grid item xs={12} md={4}> 
                                    <Button>                        
                                        <DownloadIcon/> Dowload CV
                                    </Button>          
                                </Grid>
                                <Grid item xs={12} md={4}> 
                                    <Button>                        
                                        <MailOutlineIcon/>Contact me
                                    </Button>          
                                </Grid> 
                            </Grid> 
                        </Grid> 
                    </Grid>
                </Container> 
            </StyledHero>
        </>
    )
}


export default Hero