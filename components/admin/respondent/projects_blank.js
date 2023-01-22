export default function ProjectsBlank(){
    return (<div>
        <div className="bg-white flex flex-col items-center p-20">
            <div className="flex flex-col w-96 items-center">
                <img src="/img/blank_projects.png" className="mx-auto"/>
                <p className="mt-4 text-2xl font-semibold opacity-80 text-center">Aw, shucks! No projects yet.</p>
                <p className="mt-4 text-base font-medium opacity-60 text-center">Researchers are publishing new projects all the time. Check out the latest to sign up and get paid.</p>
               

                <button className="px-6 py-2  justify-center   font-medium bg-gradient-to-tr from-primary-100 to-secondary-100  text-white rounded-full border-0  focus:outline-none hover:bg-gray-200  sm:ml-0   text-base mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110">
                Browse Projects
                </button>
                

            </div>

        </div>
    </div>)
}