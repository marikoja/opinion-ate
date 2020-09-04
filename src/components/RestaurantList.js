import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadRestaurants} from '../store/restaurants/actions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export const RestaurantList = ({loadRestaurants, restaurants}) => {
    useEffect(() => {
        loadRestaurants();
    }, [loadRestaurants]);
        
    return (
        <List>
            {restaurants.map(restaurant => (
                <ListItem key={restaurant.id}>
                    <ListItemText>{restaurant.name}</ListItemText>
                </ListItem>
            ))}
        </List>
    );
};

const mapStateToProps = state => ({
    restaurants: state.restaurants.records,
})

const mapDispatchToProps = {loadRestaurants};

export default connect(mapStateToProps, mapDispatchToProps) (RestaurantList);