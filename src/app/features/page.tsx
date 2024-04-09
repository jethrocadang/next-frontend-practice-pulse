const Page = () => {
    return (
        <div className=  " container bg-violet-500 sm:bg-blue-500 md:bg-green-500 lg:bg-red-500 w-full h-8">
            <div className="">default</div>
            <div className="sm:hidden">Small</div>
            <div className="md:hidden">Medium</div>
            <div className="lg:text-red-700">Large</div>
        </div>
    )
};

export default Page;
