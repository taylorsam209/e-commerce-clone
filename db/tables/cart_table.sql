create table cart(
    cart_id serial primary key,
    user_id int references users(id),
    price_total int
)