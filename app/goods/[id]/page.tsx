import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import GoodsBaseInfo from "@/components/GoodsBaseInfo";
import GoodsDetail from "@/components/GoodsDetail";
import React from "react";

export default function GoodsDetailPage({
  params: { id },
}: {
  params: { id: number };
}) {
  return (
    <>
      <Breadcrumb />

      <Container>
        <GoodsBaseInfo className="my-6" />
        <GoodsDetail />
      </Container>
    </>
  );
}
