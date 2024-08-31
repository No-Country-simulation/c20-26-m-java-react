import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import SearchBar from "../components/SearchBar.js";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews/>
            </ComponentPreview>
            <ComponentPreview path="/SearchBar">
                <SearchBar/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews