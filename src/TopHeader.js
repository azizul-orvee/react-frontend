import {Grid, Typography, Container} from '@mui/material';
import {Phone, Email} from '@mui/icons-material';

const TopHeader = () => {
    return (
        <div className="topbar"> 
            <Container>
                <Grid container>
                    <Grid item xs={9}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <Phone />
                            <span style={{paddingLeft:'5px', fontWeight:'normal', fontSize:'14px'}}>+880-1622196929</span>
                            <Email style={{
                                marginLeft: '15px',
                            }} />
                            <span style={{paddingLeft:'5px', fontWeight:'normal', fontSize:'14px'}}>azizulhakim.0212@gmail.com</span>
                        </div> 
                    </Grid>
                    <Grid item xs={3}>
                        <Typography style={{fontSize:'14px',fontWeight:'normal'}} variant="span" component="span">
                            The headless ecommerce prototype
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
     );
}
 
export default TopHeader;