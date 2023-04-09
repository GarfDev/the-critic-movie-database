interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: React.CSSProperties["width"];
  containerCls?: string;
  className?: string;
}

const Modal: React.FC<Props> = ({ open, onClose, width = 512, className, containerCls, children }) => {
  return (
    <div
      onClick={onClose}
      style={{ display: open ? "flex" : "none", zIndex: open ? 1 : -1 }}
      className={"fixed drop-shadow-2xl top-0 left-0 w-[100vw] h-[100vh] justify-center items-center " + containerCls}
    >
      <div className={`rounded-md bg-white overflow-hidden w-[${width}] ` + className}>{children}</div>
    </div>
  );
};

export default Modal;
