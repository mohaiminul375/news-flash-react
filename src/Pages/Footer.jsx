import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-[#112950] h-60 text-white p-6 mt-36">
            <div className="text-center">
              <div className="text-center md:w-1/2 mx-auto">
                <h2 className="font-bold text-3xl text-[#F56D04] font-play_write mb-3">News Flash React</h2>
                <p className="text-xl mb-3">Thank you for visiting Us</p>
                <hr />
                <p className="mt-5">© All right reserve by <Link 
                className="hover:underline text-[#F56D04]"
                to='https://newsapi.org' target="_blank">news.api.org</Link></p>
              </div>
            </div>
            <div className="mt-5 text-right">
            <span className=" text-right mt-5 font-bold"> Design and DevelopedBy: <Link target="_blank" to='https://mohaiminul-dev.web.app' className="hover:underline text-[#F56D04]">Mohaiminiul Islam</Link>
            </span> 
            </div>
          
           </div>
    );
};

export default Footer;