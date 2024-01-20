import { useAppSelector } from '@/lib/redux/hooks';

type Props = {};

const FavoritesModal = (props: Props) => {
  const cart = useAppSelector((state) => state.cart);
  
  return <div>FavoritesModal</div>;
};

export default FavoritesModal;
