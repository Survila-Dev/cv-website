import React from "react"

export type IUseGetYPositionAndRef = (
    elementNo: number,
    updateYPositionCallback: React.Dispatch<React.SetStateAction<(number | null)[]>>,
    ) => React.MutableRefObject<null>

export const useGetYPositionAndRef: IUseGetYPositionAndRef = (
    elementNo: number,
    updateYPositionCallback: React.Dispatch<React.SetStateAction<(number | null)[]>>,
    ) => {

    const selfElement = React.useRef(null)

    React.useEffect(() => {
        updateYPositionCallback((cur) => {
            const newCur = JSON.parse(JSON.stringify(cur))
            if (selfElement.current) {
                const { offsetTop } = selfElement.current
                newCur[elementNo] = offsetTop
            }
            return newCur
        })
    }, [])

    return selfElement
}

export const useIntersectionObserver = (classToRemove: string, classToAdd: string, threshold: number): void => {

  const intersectCallback: IntersectionObserverCallback = (entries: any) => {
    entries.forEach((entry: any) => {
      const element = entry.target
      
      if (entry.isIntersecting) {
        element.classList.remove(classToRemove);
        element.classList.add(classToAdd);
        return
      }

      element.classList.remove(classToAdd);
      element.classList.add(classToRemove);
      return
    })
  }

  React.useEffect(() => {

    const options = {
      threshold: threshold,
    }

    const flyFromLeftObserver = new IntersectionObserver(intersectCallback, options)
    const elementsToObserve = document.querySelectorAll("." + classToRemove)
    if (elementsToObserve) {
      elementsToObserve.forEach((elementToObserve) => {
      flyFromLeftObserver.observe(elementToObserve)
    })
    }
  }, [])
  return
}