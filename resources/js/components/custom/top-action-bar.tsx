import SaveButton from "./button/save-button";
import DeleteButton from "./button/delete-button";
import BrowseButton from "./button/browse-button";
import CreateButton from "./button/create-button";
import { useAppSelector } from "@/core/presentation/store/useAppSelector";


type TopActionBarProps = {
    showCreate?: boolean;
    showSave?: boolean;
    showDelete?: boolean;
    showBrowse?: boolean;

    createTo?: string;
    browseTo?: string;

    onDelete?: () => void;
}


const TopActionBar = ({
    showCreate = false,
    showSave = false,
    showDelete = false,
    showBrowse = false,
    createTo,
    browseTo,
    onDelete,
}: TopActionBarProps) => {
    const isLoading = useAppSelector(state => state.loading.global);


    return(
        <div className="flex items-center justify-items-start bg-background dark:bg-background rounded-md mb-8 shadow-sm gap-2 col-span-full">
            {showCreate && createTo && <CreateButton to={createTo} disabled={isLoading} />}
            {showSave && <SaveButton disabled={isLoading} />}
            {showDelete && <DeleteButton disabled={isLoading} onDelete={() => onDelete} />}
            {showBrowse && browseTo && <BrowseButton to={browseTo} disabled={isLoading} />}
        </div>
    );
}

export default TopActionBar;
