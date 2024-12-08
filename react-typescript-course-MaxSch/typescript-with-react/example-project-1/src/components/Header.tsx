interface IHeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = ({ image, children }) => {
  return (
    <div>
      <img src={image.src} alt={image.alt}>
        {children}
      </img>
    </div>
  );
};

export default Header;

{
  /* Other way to write the return statement in Header component:
    
    <img {...image}> 
        {children}
      </img> */
}
