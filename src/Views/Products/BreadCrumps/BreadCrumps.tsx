import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

type Props = {
  as: string;
};

const BreadCrumps = (props: Props) => {
  return (
    <Flex direction="column" gap="1.5rem" mb="1.5rem">
      <Breadcrumb separator={<MdArrowRight color="" />}>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/products">
            Produtos
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Cocina</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading>Cocina</Heading>
    </Flex>
  );
};

export default BreadCrumps;
