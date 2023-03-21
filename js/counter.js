const counters = document.querySlectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = counter.getAttribute('data-target')
        console.log(target)
    }

    updateCounter()
})
