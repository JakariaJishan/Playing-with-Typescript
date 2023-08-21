type ChildrenProps = {
  children: React.ReactNode;
};
const Children = ({ children }: ChildrenProps) => {
  return <div>{children}</div>;
};

export default Children;
