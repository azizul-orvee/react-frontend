import {
  Grid,
  Typography,
  Container,
  Paper,
  Divider,
  IconButton,
  Stack,
  Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FormatListBulleted, Category } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Sidebar = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState();
  const baseUrl = "https://dev-azizul-wp.pantheonsite.io/wp-json/";
  const consumer_key = "ck_b1c34afbd3d1c8a5b17bf9521271b38e4e3bf402";
  const consumer_secret = "cs_42681fd6532698885c733799fb965ccd35664428";

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const data = await axios.get(
        `${baseUrl}wc/v3/products/categories?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`
      );
      setCategories(data.data);
      setLoading(false);
    };
    return fetchCategories();
  }, []);

  return (
    <Grid item xs={5} sm={4} md={2}>
      <Paper>
        <List>
          <ListItem>
            <ListItemIcon>
              <FormatListBulleted />
            </ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItem>
          <Divider />
          {!loading &&
            categories.map((cat) => (
              <>
                <ListItem key={`cat_${cat.id}`} disablePadding>
                  <ListItemButton
                    to={`/category/${cat.id}`}
                    component={NavLink}
                    activeClassName="active"
                    disablepadding
                  >
                    <ListItemIcon>
                      <Category />
                    </ListItemIcon>
                    <ListItemText primary={cat.name} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            ))}
        </List>
      </Paper>
    </Grid>
  );
};

export default Sidebar;
