import Modal from "components/Modal";
import { useQuery } from "react-query";
import { TMDBService } from "services";

interface Props {
  selected: string | undefined;
  onClose: () => void;
}

const DetailModal: React.FC<Props> = ({ selected, onClose }) => {
  const { data } = useQuery(`movie-${selected}`, () => TMDBService.getDetail({ id: selected! }), { enabled: !!selected });

  return (
    <Modal className="w-[1024px] h-[254px]" open={!!selected} onClose={onClose}>
      <div className="w-full h-full">{JSON.stringify(data)}</div>
    </Modal>
  );
};

export default DetailModal;
