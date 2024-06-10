/**
 * The function returns a React component that displays a starter kit with React, Typescript,
 * TailwindCss, and Vite.
 * @returns The `App` component is being returned, which renders a div with a flexbox layout and a
 * child div with a background color of indigo, rounded corners, and a hover effect. The child div
 * contains a heading, a subheading, and a paragraph with a link.
 */

import navbarLogo from './assets/image/navbar-logo.png';
import homeImg from './assets/image/home-img.png';
import testimoni1 from './assets/image/testimoni-1.png';
import testimoni2 from './assets/image/testimoni-2.png';
import testimoni3 from './assets/image/testimoni-3.png';
import testimoni4 from './assets/image/testimoni-4.png';
import bookImg from './assets/image/book.png';

import ConnectButton from './assets/Component/ConnectWallet';



const App = () => {
  return (
    <div className='font-body'>
      <section className="bg-white mb-20 md:mb-52 xl:mb-72">
        <div className="container max-w-screen-xl mx-auto px-4">
          <nav className="flex-wrap lg:flex items-center py-14 xl:relative z-10" x-data="{navbarOpen:false}">
            
            <ul className="lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-16 hidden">
              <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">Landing</a>
              </li>
              <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">Pages</a>
              </li>
              <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">Contact</a>
              </li>
              <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">About</a>
              </li>
            </ul>
          
          </nav>

          <div className="flex items-center justify-center xl:justify-start">
            <div className="mt-28 text-center xl:text-left">
              <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl text-gray-900 leading-normal mb-6">
              Web3Modal: <br /> Simple, intuitive wallet login.
              </h1>
              <p className="font-normal text-xl text-gray-400 leading-relaxed mb-12">
              With this drop-in UI SDK, enable any wallet's users to <br /> seamlessly log in to your app and enjoy a smooth, unified experience.
              </p>
              <a className="px-6 py-4  text-white font-semibold text-lg rounded-xl transition ease-in-out duration-500">
              <ConnectButton />
              </a>
            </div>
            <div className="hidden xl:block xl:absolute z-0 top-0 right-0">
              <img src={homeImg} alt="Home img" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-16 xl:relative">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col xl:flex-row justify-end">
            <div className="hidden xl:block xl:absolute left-0 top-0 w-1/2 h-1/3">
              <img src= 'https://cdn1.vectorstock.com/i/1000x1000/39/60/digital-mobile-e-wallet-concept-vector-11813960.jpg' alt="Feature img" />
            </div>
            <div>
              <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6">
                Choice of various types of feature
              </h1>

              <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20">
                <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                  <i data-feather="check-circle" className=" text-green-900"></i>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-gray-900 text-2xl mb-2">User onboarding interface.</h4>
                  <p className="font-normal text-gray-400 text-xl leading-relaxed">
                  Step-by-step guidance that helps users  <br /> get started with a wallet.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20">
                <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                  <i data-feather="lock" className=" text-green-900"></i>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-gray-900 text-2xl mb-2">Multi-chain ready.</h4>
                  <p className="font-normal text-gray-400 text-xl leading-relaxed">
                  Designed to work with EVM and non-EVM  <br /> chains.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4">
                <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                  <i data-feather="credit-card" className=" text-green-900"></i>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-gray-900 text-2xl mb-2">Feature-rich account view.</h4>
                  <p className="font-normal text-gray-400 text-xl leading-relaxed">
                  All the information your users want and <br /> need, including ENS domain resolution,
                  <br/> token balance view, links to Etherscan, 
                  <br/>and transaction history and filtering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
          <p className="font-normal text-gray-400 text-lg md:text-xl text-center uppercase mb-6"></p>
          <h1 className="font-semibold text-gray-900 text-2xl md:text-4xl text-center leading-normal mb-14">
            What People Say <br /> About Web3Modal
          </h1>
          <div className="hidden xl:block xl:absolute top-0">
            <img src={testimoni1} alt="Image" />
          </div>
          <div className="hidden xl:block xl:absolute top-32">
            <img src={testimoni2} alt="Image" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-center md:space-x-8 lg:space-x-12 mb-10 md:mb-20">
            <div className="bg-gray-100 rounded-lg mb-10 md:mb-0">
              <img src={testimoni3} alt="Image" className="mx-8 my-8" />
              <div className="flex items-center gap-5 mx-8">
                <i data-feather="star" className="text-yellow-500"></i>
                <i data-feather="star" className="text-yellow-500"></i>
                <i data-feather="star" className="text-yellow-500"></i>
                <i data-feather="star" className="text-yellow-500"></i>
                <i data-feather="star" className="text-yellow-500"></i>
              </div>
              <p className="font-normal text-sm lg:text-md text-gray-400 mx-8 my-8">
              Instant read-write access to 25+   <br /> networks with zero configuration <br />thanks to our built-in RPC.
              </p>
              <h3 className="font-semibold text-gray-900 text-xl md:text-2xl lg:text-3xl mx-8 mb-8">Brooklyn Simmons</h3>
            </div>
            <div className="bg-gray-100 rounded-lg">
              <img src={testimoni4} alt="Image" className="mx-8 my-8" />
              <div className="flex items-center gap-5 mx-8">
                <i data-feather="star" className="text-yellow-500"></i>
                <i data-feather="star" className="text-yellow-500"></i>
                <i data-feather="star" className="text-yellow-500"></i>
                <i data-feather="star" className="text-yellow-500"></i>
                <i data-feather="star" className="text-yellow-500"></i>
              </div>
              <p className="font-normal text-sm lg:text-md text-gray-400 mx-8 my-8">
              Build in React Native, Swift, Kotlin, and  <br /> Flutter to bring alive your natively mobile <br /> experience on Android or iOS.
              </p>
              <h3 className="font-semibold text-gray-900 text-xl md:text-2xl lg:text-3xl mx-8 mb-8">Ralph Edwards</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
          <div className="bg-green-800 flex flex-col lg:flex-row items-center justify-evenly py-14 rounded-3xl">
            <div className="text-center lg:text-left mb-10 lg:mb-0">
              <h1 className="font-semibold text-white text-4xl md:text-5xl lg:text-7xl leading-normal mb-4">
                Talk to us <br /> to discuss
              </h1>
              <p className="font-normal text-white text-md md:text-xl">
                Need more time to discuss? Won’t worry, we are <br /> ready to help you. You can fill in the column on the <br /> right to book a meeting with us. Totally free.
              </p>
            </div>
            <div className="hidden xl:block xl:absolute right-0">
              <img src={bookImg} alt="Image" />
            </div>
            <div className="hidden md:block bg-white xl:relative px-6 py-3 rounded-3xl">
              <div className="py-3">
                <h3 className="font-semibold text-gray-900 text-3xl">Book a meeting</h3>
              </div>
              <div className="py-3">
                <input type="text" placeholder="Full Name" className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none" />
              </div>
              <div className="py-3">
                <input type="text" placeholder="Email" className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none" />
              </div>
              <div className="py-3 relative">
                <input type="text" placeholder="Date" className="px-4 py-4 w-96 bg-gray-100 font-normal text-lg placeholder-gray-400 rounded-xl outline-none" />
                <div className="absolute inset-y-0 left-80 ml-6 flex items-center text-xl text-gray-600">
                  <i data-feather="calendar"></i>
                </div>
              </div>
              <div className="py-3 relative">
                <input type="text" placeholder="Virtual Meeting" className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none" />
                <div className="absolute inset-y-0 left-80 ml-6 flex items-center text-xl text-gray-600">
                  <i data-feather="chevron-down"></i>
                </div>
              </div>
              <div className="py-3">
                <button className="w-full py-4 font-semibold text-lg text-white bg-green-700 rounded-xl hover:bg-green-900 transition ease-in-out duration-500">Booking</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">
            
            <div className="text-center lg:text-left mb-10 lg:mb-0">
              <h4 className="font-semibold text-gray-900 text-2xl mb-6">WalletConnect</h4>
              <a href="#" className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300">Product</a>
              <a href="#" className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300">Explorer</a>
            </div>
            <div className="text-center lg:text-left mb-10 lg:mb-0">
              <h4 className="font-semibold text-gray-900 text-2xl mb-6">Resources</h4>
              <a href="#" className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300">Docs</a>
              <a href="#" className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300">Github</a>
              <a href="#" className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300">FAQ</a>
            </div>
            <div className="text-center lg:text-left">
              <h4 className="font-semibold text-gray-900 text-2xl mb-6">Company</h4>
              <a href="#" className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300">Blog</a>
               <a href="#" className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300">Jobs</a>
               <a href="#" className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300">Brand</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;