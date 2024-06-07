const style = getComputedStyle(document.body)
/**
 * Ajax init setup
 */
$(document).ready(function () {
    $.ajaxSetup({ cache: false });
});
/**
 * Copy text to clip board
 */
$(document).on('click', '.copy-text', function () {
    navigator.clipboard.writeText($(this).attr('data-text')).then(() => {
        toast(`${$(this).attr('data-type')} copied to clipboard.`, 'success');
    });

})
/**
 * Ajax form submission
 * Return to form callback on success
 */
$('document').ready(function () {
    $(document).on('submit', 'form.ajax', async function (e) {
        e.preventDefault();
        let $form = $(this);
        /**
         * Check if form has confirmation
         */
        if ($form.attr('data-confirmation') && !$form.attr('data-confirmed')) {

            dialog($form.attr('data-confirmation'), function () {
                $form.attr('data-confirmed', true);
                $form.submit();
            })
            return false;
        }
        let continueBTN = $(`.continue-btn[form=${$form.attr('id')}]`);
        continueBTN.startLoading();
        let formData = new FormData(this);
        if ($form.attr('data-files')) {
            try {
                let appends = JSON.parse($form.attr('data-files'));

                for (let key in appends) {
                    let data = eval(appends[key]);
                    if (data && data != undefined) {
                        if (Array.isArray(data)) {
                            for (let i in data) {
                                if (data.hasOwnProperty(i)) {
                                    formData.append(`${key}[]`, data[i]);
                                }
                            }
                        } else {
                            formData.append(key, eval(appends[key]));
                        }
                    }
                }
            } catch (error) {
            }
        }

        try {
            await $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                //data: $form.serialize(),
                data: formData,
                processData: false,
                contentType: false,
                success: function (data) {
                    if (data.success) {
                        if ($form.attr('data-callback')) {
                            let callbackName = $form.attr('data-callback');
                            if (typeof window[callbackName] === 'function') {
                                window[callbackName](data);
                            }
                        }
                        formSuccess($form, data);
                    } else {
                        makeError(data, $form);
                    }
                    $form.removeAttr('data-confirmed');
                },
                error: function (data) {
                    makeError(data, $form);
                }
            });
        } catch (e) { }
        continueBTN.stopLoading();
    });
});
$(document).on('click', 'a.ajax, .a.ajax', async function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    let $this = $(this);
    if ($(this).attr('data-confirmation')) {
        dialog($this.attr('data-confirmation'), function () {
            ajaxLinkLoad($this)
        })
    } else {
        ajaxLinkLoad($this)
    }
});
async function ajaxLinkLoad($this) {
    $this.addClass('disabled');
    try {
        await $.ajax({
            type: $this.attr('data-method') ?? 'get',
            url: $this.attr('href'),
            success: function (data) {
                if ($this.attr('data-callback')) {
                    let callbackName = $this.attr('data-callback');
                    if (typeof window[callbackName] === 'function') {
                        window[callbackName](data);
                    }
                }
                formSuccess($this, data)
            },
            error: function (data) {
                makeError(data)
            }
        });
    } catch (error) {

    }
    $this.removeClass('disabled');
}
/**
 * Custom button loader for form submissions
 */
$(function () {
    $.fn.startLoading = function (args) {
        swal.close();
        $(this).each(function () {
            let fw = $(this).outerWidth();
            $(this).html(`<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`).attr('disabled', true);
            let sw = $(this).outerWidth();
            $(this).css({
                width: Math.max(fw, sw)
            });
        })
        return this;
    };
    $.fn.stopLoading = function (args) {
        $(this).each(function () {
            $(this).html($(this).attr('data-default')).removeAttr('disabled', true).css({
                width: '',
            });
        })
        return this;
    };
})
/**
 * Make ajax error
 * @param {*} data 
 * @returns 
 */
const makeError = function (data = null, $form = null) {
    if (data && data.responseJSON) {
        return handleAPIErrors(data.responseJSON, $form);
    }

    else {
        toast(data.message ?? 'Something went wrong, please try again later.', 'warning');
        if (data && data.redirect) {
            window.location.href = data.redirect;
        }
    }

}

/**
 * Handle ajax API errors
 * @param {*} result 
 */
const handleAPIErrors = async function (result, $form = null) {
    $('.form-group').removeClass('error');
    let html = '';
    let ers = [];
    await $.each(result.data, function (key, values) {
        $.each(values, function (i, error) {
            if (!(ers.indexOf(error) !== -1)) {
                html += `<p>${error}</p>`;
                ers.push(error)
            }

        })
        let keyNames = key.split(".");
        let keyName = keyNames[0];
        keyNames.shift();
        keyNames.forEach(function (v) {
            keyName += `[${v}]`;
        });
        try {
            if ($form) {
                $formID = $form.attr('id');

                console.log($(`[name="${keyName}"][form="${$formID}"]`));
                $(`[name="${keyName}"][form="${$formID}"]`).closest('.form-group').addClass('error').attr('data-error', values[0]);
                if (!$('.form-control').is(':focus')) {
                    $(`[name="${keyName}"][form="${$formID}"]`).focus().scrollTo();
                }
            } else {
                $(`[name="${keyName}"]`).closest('.form-group').addClass('error').attr('data-error', values[0]);
                if (!$('.form-control').is(':focus')) {
                    $(`[name="${keyName}"]`).focus().scrollTo();
                }


            }
        }
        catch (e) { }
    });
    html = `<div class="APIerrors">${html}</div>`;
    let msg = result.message && result.message !== "" ? result.message : 'Something went wrong, please try again later.';
    toastAPIError(msg, html);
    try {
        if (result.redirect) {
            await sleep(300);
            window.location = result.redirect;
        }
    }
    catch (e) { }
}
/**
 * Create sweet alert toast message
 * @param {*} message 
 * @param {*} type 
 */
const toast = function (message, type) {
    Swal.fire({
        toast: true,
        title: message,
        position: 'bottom',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        showCloseButton: true,
        customClass: {
            container: `c-toast ${type}`,
        },
    });
}
/**
 * Toast API error messages.
 * @param {*} message 
 * @param {*} html 
 */
const toastAPIError = function (message, html = null) {
    Swal.fire({
        toast: true,
        title: message,
        html: html,
        position: 'bottom',
        showConfirmButton: false,
        timer: 60000,
        timerProgressBar: false,
        showCloseButton: true,
        customClass: {
            container: 'c-toast error',
        },
    });
}

const formSuccess = function ($form = null, data = null) {
    if ($form) {
        if ($form.attr('data-reload')) {
            location.reload();
        }
        if ($form.attr('data-reset')) {
            $form.trigger('reset');
        }
        if ($form.attr('data-modal')) {
            $(`.continue-btn[form="${$form.attr('id')}"]`).closest('.modal').modal('hide');
        }
        $form.find('.form-group').removeClass('error');
        $form.find('.reset-value').val('');
        $('.reset-value').val('');
        $('.form-group').removeClass('error');
    }
    if (data && data.success && data.message) {
        toast(data.message, 'success');
    }
    else if (data && !data.success && data.message) {
        toast(data.message, 'error');
    } else if (data && !data.success) {
        makeError()
    }
    if ($form && $form.attr('data-redirect') == 'false') {
        return false;
    }
    else if (data && data.redirect)
        window.location.href = data.redirect;
    return;
}

$(document).on('change input', '.error input, .error select, .error textarea', function () {
    $(this).closest('.error').removeClass('error').removeAttr('data-error');
});

/**
 * Sleep for give time
 * @param {*} ms
 * @returns 
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * Share using navigation
 */
$(document).on('click', '.share', function () {
    navigator
        .share({
            title: $(this).data('title'),
            text: $(this).data('text'),
            url: $(this).data('url'),
        });
});