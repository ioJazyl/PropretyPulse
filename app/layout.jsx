import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropretyPulse | Find The Perfect Rental",
  description: "Find your  dream rental proprety",
  keywords: "rental, find rentals, find propreties",
};

function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}

export default MainLayout;
