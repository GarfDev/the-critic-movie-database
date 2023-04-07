interface Props {
  className?: string;
}

const Sidebar: React.FC<Props> = ({ className }) => {
  return <div className={`flex flex-col ${className}`}></div>;
};

export default Sidebar;
