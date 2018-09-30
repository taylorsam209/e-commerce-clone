create table cart_details(
    cart_details_id serial primary key,
    cart_id int references cart(cart_id),
    quantity int
)