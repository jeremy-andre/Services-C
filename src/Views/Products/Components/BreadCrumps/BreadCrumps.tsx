import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path !== "");
  const CategoryUp = paths[paths.length - 1]
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <Flex direction="column" pb="1rem" gap="0.5rem" maxW="80rem" w="100%">
      <Breadcrumb separator={<MdArrowRight color="" />}>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        {paths.map((path, index) => {
          const isLast = index === paths.length - 1;
          const formattedPath = path
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          return (
            <BreadcrumbItem key={index} isCurrentPage={isLast}>
              {isLast ? (
                <BreadcrumbLink>{formattedPath}</BreadcrumbLink>
              ) : (
                <BreadcrumbLink
                  as={Link}
                  to={`/${paths.slice(0, index + 1).join("/")}`}
                >
                  {formattedPath}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
      <Heading
        mb="1rem"
        fontSize={{ base: "1.4rem", md: "2rem", lg: "2.5rem", xl: "2.5rem" }}
      >
        {CategoryUp === "Products" ? " Selecciona una Categoría" : CategoryUp}
      </Heading>
    </Flex>
  );
};

export default Breadcrumbs;
