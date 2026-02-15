import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CANONICAL_BASE = 'https://pontocruzconceptstore.pt';

const Canonical = () => {
  const location = useLocation();
  const path = location.pathname.replace(/\/$/, '') || '';
  const canonicalUrl = `${CANONICAL_BASE}${path || '/'}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default Canonical;