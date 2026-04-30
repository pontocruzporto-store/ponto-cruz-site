import { Helmet } from "react-helmet-async";
import { localBusinessSchema } from "../utils/seo";

const SchemaOrg = () => {
  const schema = localBusinessSchema();

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SchemaOrg;
