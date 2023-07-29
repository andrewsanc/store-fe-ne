export default function Search(props) {
  const { search } = props;

  return (
    <form onSubmit={search}>
      <div className='ui search'>
        <div className='ui icon input'>
          <input id='search' className='prompt' type='text' />
          <i class='search icon'></i>
        </div>
      </div>
    </form>
  );
}
