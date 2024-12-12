// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
        console.log(value);
    }
}

// Task 02 and 03: Awaiting a Call with Error Handling
async function awaitCall() {
    try {
        const simulateFetch = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        resolve("Data fetched successfully");
                    } else {
                        reject(new Error("Failed to fetch data"));
                    }
                }, 1000);
            });
        };

        const data = await simulateFetch();
        console.log(data);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

// Task 04: Chaining Async/Await
async function chainedAsyncFunctions() {
    const asyncFunction = async (message) => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
        console.log(message);
    };

    await asyncFunction("First function executed");
    await asyncFunction("Second function executed");
    await asyncFunction("Third function executed");
}

// Task 05: Awaiting Concurrent Requests
async function concurrentRequests() {
    const simulateAPI = (id) => {
        return new Promise(resolve => {
            setTimeout(() => resolve(`Response from API ${id}`), 1000);
        });
    };

    const [response1, response2] = await Promise.all([simulateAPI(1), simulateAPI(2)]);
    console.log("Combined results:", response1, response2);
}

// Task 06: Awaiting Parallel Calls
async function parallelCalls(urls) {
    const simulateFetch = (url) => {
        return new Promise(resolve => {
            setTimeout(() => resolve(`Data from ${url}`), 1000);
        });
    };

    const responses = await Promise.all(urls.map(url => simulateFetch(url)));
    console.log("Responses from all URLs:", responses);
}

// Example Usage
(async () => {
    console.log("Task 01: Iterating with Async/Await");
    await iterateWithAsyncAwait(["A", "B", "C"]);

    console.log("\nTask 02 & 03: Awaiting a Call with Error Handling");
    await awaitCall();

    console.log("\nTask 04: Chaining Async/Await");
    await chainedAsyncFunctions();

    console.log("\nTask 05: Awaiting Concurrent Requests");
    await concurrentRequests();

    console.log("\nTask 06: Awaiting Parallel Calls");
    await parallelCalls(["URL1", "URL2", "URL3"]);
})();
