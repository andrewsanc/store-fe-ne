export default function Pagination(props) {
  const { getNextPage } = props;
  return (
    <div className='centered row'>
      <div className='ui pagination menu'>
        <a className='item' onClick={() => getNextPage("prev")}>
          prev
        </a>
        <a className='item' onClick={() => getNextPage("next")}>
          next
        </a>
      </div>
    </div>
  );
}
