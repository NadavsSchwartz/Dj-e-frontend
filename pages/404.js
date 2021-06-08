import Layout from "@/components/Layout";

import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";

const NotFound = () => {
  return (
    <Layout title="Page Not Found">
      <div className="text-center">
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  );
};

export default NotFound;
