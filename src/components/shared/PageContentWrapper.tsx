
import { Box} from "@mui/material";

import { pageMaxWidth } from "../shared/constants";

export const PageContentWrapper = ({ children }: React.PropsWithChildren<{}>) =>{
    return(
        <Box maxWidth={pageMaxWidth} margin={"auto"} p={4}>{children}</Box>
    )
}
