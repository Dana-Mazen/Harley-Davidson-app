import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className="bg-[#ececec] h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold uppercase text-black">404 Page Not Found</h2>
      <Link to="/" className="bg-orange-500 text-white py-2 px-6 rounded-sm font-bold mt-4">
        Back to Home
      </Link>
    </div>
  );
}
export default NotFound;