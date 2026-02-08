import { useLocation } from "wouter";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div key={location} className="page-fade">
      {children}
    </div>
  );
}
