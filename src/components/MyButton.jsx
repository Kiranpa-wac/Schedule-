import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const MyButton = ({link, title}) => {
  return (
    <Link to={link}>
      <Button rightIcon={<ArrowForwardIcon />} colorScheme='purple' variant="outline">
        {title}
      </Button>
    </Link>
  );
};

export default MyButton;
