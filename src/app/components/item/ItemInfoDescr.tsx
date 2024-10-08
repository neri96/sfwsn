import { AnimatePresence } from "framer-motion";

import ToolTip from "../ui/ToolTip";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Overlay from "../ui/Overlay";
import Dialog from "../ui/Dialog";
import Description from "./shared/Description";

import useToggle from "@/app/hooks/useToggle";

import IcInfo from "@/app/assets/icons/info.svg";

const ItemInfoDescr = ({
  title,
  description,
}: {
  title: string;
  description: string[];
}) => {
  const [isOpen, toggleDialog] = useToggle();

  return (
    <>
      <ToolTip content="Info" isPopupOpen={isOpen}>
        <Button noStyle onClick={toggleDialog}>
          <Icon src={IcInfo} alt="Description" />
        </Button>
      </ToolTip>

      <AnimatePresence>
        {isOpen && (
          <Overlay onClose={toggleDialog}>
            <Dialog title={title} withOVerlay onClose={toggleDialog}>
              <Description data={description} />
            </Dialog>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default ItemInfoDescr;
