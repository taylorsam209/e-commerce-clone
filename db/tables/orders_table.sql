create table orders(
    order_id serial primary key,
    user_id int references users(id),
    date date not null default current_date,
    price_total int
)