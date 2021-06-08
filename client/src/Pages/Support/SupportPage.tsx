const SupportPage = () => {
  const queries = [
    {
    id: 1,
    queryType: 'Sales',
    queryDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 2,
      queryType: 'Technical Support',
      queryDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 3,
      queryType: 'Media Inquiries',
      queryDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];
    return (
    <div className="flex items-center justify-start bg-gray-50 bg-cover" style={{height: '50vh'}}> 
      <div className="w-full absolute p-2" style={{marginTop: '25rem'}}>
        <div className="flex w-full self-end space-x-4 p-4" >
          {queries.map((item) => (
            <div key={item.id} className="flex flex-col w-1/3 box-border space-y-8 shadow-2xl p-4 border-2 rounded-md bg-white">
            <div className="text-2xl pt-8">{item.queryType}</div>
            <div>
              <p className="text-gray-400">{item.queryDescription}</p>
            </div>
            <div>
              <a href="/register"><span className="text-indigo-600 text-md hover:text-indigo-300">Contact Us</span></a>
            </div>
          </div>
          ))
        }
        </div>
      </div> 
    </div>
    )
}

export default SupportPage;