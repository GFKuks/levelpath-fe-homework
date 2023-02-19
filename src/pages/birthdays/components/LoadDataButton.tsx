import { Button, CircularProgress as Loader, styled } from "@mui/material";

interface ILoadDataButtonProps {
    isLoading: boolean;
    onClick: () => void;
};

export const LoadDataButton = ({ isLoading, onClick }: ILoadDataButtonProps) => {
	const StyledButton = styled(Button)({
		width: "100%",
		minHeight: "75px",
	});

    return (
        <StyledButton
            onClick={onClick}
            disabled={isLoading}
            variant="contained"
            size="large"
        >
            {!isLoading ? "Load notable birthdays on this day" : <Loader />}
        </StyledButton>
    );
};