import ServicesNoticies from "../services/services";

class NoticiesControlller {
    async newsNoticies (section: string) {
        const res = await ServicesNoticies(section);
        const noticies = res.data.results.map(({title, abstract, url, multimedia}) => {
            const image = multimedia ? multimedia[0].url: null
            
            return {
                title,
                abstract,
                url,
                image,
            }
        })
        return noticies;
    }
}

export { NoticiesControlller }