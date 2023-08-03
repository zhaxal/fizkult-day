import { Stack, Text } from "@chakra-ui/react";
import { FC } from "react";

interface TablePanelProps {
    time: string;
    title: string;
    variant?: boolean;
}

const TablePanel: FC<TablePanelProps> = ({ time, title, variant }) => {
    return (
        <>
            <Stack
                sx={{
                    background: "linear-gradient(17deg, #0087BE 0%, #0087BE 100%)",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                }}
                py="10px"
                alignItems="center"
                px="16px"
                direction="row"
                spacing={variant ? "24px" : "16px"}
            >
                <Text
                    sx={{
                        minWidth: variant ? "200px" : "128px",
                        fontFamily: "Gotham Pro Regular",
                        textAlign: "center",
                        color: "#FFFFFF",
                        fontSize: variant ? "24px" : "16px",
                        fontWeight: "400",
                        lineHeight: "normal",
                    }}
                >
                    {time}
                </Text>
                <Text
                    sx={{
                        fontFamily: "Gotham Pro Regular",
                        color: "#FFFFFF",
                        fontSize: variant ? "24px" : "16px",
                        fontWeight: "400",
                        lineHeight: "120%",
                    }}
                >
                    {title}
                </Text>
            </Stack>
        </>
    );
};

export default TablePanel;