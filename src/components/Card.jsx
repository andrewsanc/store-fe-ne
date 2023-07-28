export default function Card(props) {
  const {
    product: { _id, featured, rating, createdAt, name, price },
  } = props;

  return (
    <div className='card'>
      <div className='content'>
        <div className='header'>{name.toUpperCase()}</div>
        <div className='meta'>${price}</div>
        <div className='meta'>Rating: {rating}</div>
      </div>
    </div>
  );
}
