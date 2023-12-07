export interface FooterProps {
  isCreating: boolean;
  handleFormVisible: () => void;
  handlePagination: (params: { skip: number; take: number }) => void;
}
