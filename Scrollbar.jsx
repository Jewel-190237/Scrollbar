<div className='flex border w-full overflow-x-auto mx-auto rounded'>
    <div className='flex-none w-[310px] flex space-x-6 py-[22px] text-white items-center bg-primary'>
        <RiMenu2Fill className='ml-6' />
        <p className='capitalize text-[16px] font-medium'>browse all categories</p>
    </div>
    <div className='flex-none w-[780px] border md:border-0'>
        <Input
            className='py-[22px] text-[20px] border-none'
            placeholder="search all product"
            prefix={<SearchOutlined className='ml-2 mr-4 text-2xl' />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    </div>
    <div className='flex-none w-[230px] flex items-center border md:border-t-0 md:border-b-0 border-l md:border-r-0'>
        <Dropdown menu={{ items, onClick: handleMenuClick }} trigger={['hover']} overlayClassName='category-dropdown'>
            <Space className='ml-5 text-[16px] space-x-4 cursor-pointer'>
                <span className="capitalize">{selectedCategory}</span>
                <DownOutlined />
            </Space>
        </Dropdown>
    </div>
</div>