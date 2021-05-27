// https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ValidatingWebhookConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#metadata ValidatingWebhookConfiguration#metadata}
  */
  readonly metadata: ValidatingWebhookConfigurationMetadata[];
  /**
  * webhook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#webhook ValidatingWebhookConfiguration#webhook}
  */
  readonly webhook: ValidatingWebhookConfigurationWebhook[];
}
export interface ValidatingWebhookConfigurationMetadata {
  /**
  * An unstructured key value map stored with the validating webhook configuration that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#annotations ValidatingWebhookConfiguration#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#generate_name ValidatingWebhookConfiguration#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the validating webhook configuration. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#labels ValidatingWebhookConfiguration#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the validating webhook configuration, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#name ValidatingWebhookConfiguration#name}
  */
  readonly name?: string;
}

function validatingWebhookConfigurationMetadataToTerraform(struct?: ValidatingWebhookConfigurationMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ValidatingWebhookConfigurationWebhookClientConfigService {
  /**
  * `name` is the name of the service. Required
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#name ValidatingWebhookConfiguration#name}
  */
  readonly name: string;
  /**
  * `namespace` is the namespace of the service. Required
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#namespace ValidatingWebhookConfiguration#namespace}
  */
  readonly namespace: string;
  /**
  * `path` is an optional URL path which will be sent in any request to this service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#path ValidatingWebhookConfiguration#path}
  */
  readonly path?: string;
  /**
  * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#port ValidatingWebhookConfiguration#port}
  */
  readonly port?: number;
}

function validatingWebhookConfigurationWebhookClientConfigServiceToTerraform(struct?: ValidatingWebhookConfigurationWebhookClientConfigService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface ValidatingWebhookConfigurationWebhookClientConfig {
  /**
  * `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#ca_bundle ValidatingWebhookConfiguration#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.

The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.

Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.

The scheme must be "https"; the URL must begin with "https://".

A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.

Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#url ValidatingWebhookConfiguration#url}
  */
  readonly url?: string;
  /**
  * service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#service ValidatingWebhookConfiguration#service}
  */
  readonly service?: ValidatingWebhookConfigurationWebhookClientConfigService[];
}

function validatingWebhookConfigurationWebhookClientConfigToTerraform(struct?: ValidatingWebhookConfigurationWebhookClientConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    url: cdktf.stringToTerraform(struct!.url),
    service: cdktf.listMapper(validatingWebhookConfigurationWebhookClientConfigServiceToTerraform)(struct!.service),
  }
}

export interface ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#key ValidatingWebhookConfiguration#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#operator ValidatingWebhookConfiguration#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#values ValidatingWebhookConfiguration#values}
  */
  readonly values?: string[];
}

function validatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsToTerraform(struct?: ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ValidatingWebhookConfigurationWebhookNamespaceSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#match_labels ValidatingWebhookConfiguration#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#match_expressions ValidatingWebhookConfiguration#match_expressions}
  */
  readonly matchExpressions?: ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions[];
}

function validatingWebhookConfigurationWebhookNamespaceSelectorToTerraform(struct?: ValidatingWebhookConfigurationWebhookNamespaceSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(validatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#key ValidatingWebhookConfiguration#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#operator ValidatingWebhookConfiguration#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#values ValidatingWebhookConfiguration#values}
  */
  readonly values?: string[];
}

function validatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsToTerraform(struct?: ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ValidatingWebhookConfigurationWebhookObjectSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#match_labels ValidatingWebhookConfiguration#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#match_expressions ValidatingWebhookConfiguration#match_expressions}
  */
  readonly matchExpressions?: ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions[];
}

function validatingWebhookConfigurationWebhookObjectSelectorToTerraform(struct?: ValidatingWebhookConfigurationWebhookObjectSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(validatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface ValidatingWebhookConfigurationWebhookRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#api_groups ValidatingWebhookConfiguration#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#api_versions ValidatingWebhookConfiguration#api_versions}
  */
  readonly apiVersions: string[];
  /**
  * Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If '*' is present, the length of the slice must be one. Required.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#operations ValidatingWebhookConfiguration#operations}
  */
  readonly operations: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#resources ValidatingWebhookConfiguration#resources}
  */
  readonly resources: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#scope ValidatingWebhookConfiguration#scope}
  */
  readonly scope?: string;
}

function validatingWebhookConfigurationWebhookRuleToTerraform(struct?: ValidatingWebhookConfigurationWebhookRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.apiGroups),
    api_versions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.apiVersions),
    operations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.operations),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}

export interface ValidatingWebhookConfigurationWebhook {
  /**
  * AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#admission_review_versions ValidatingWebhookConfiguration#admission_review_versions}
  */
  readonly admissionReviewVersions?: string[];
  /**
  * FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#failure_policy ValidatingWebhookConfiguration#failure_policy}
  */
  readonly failurePolicy?: string;
  /**
  * matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.

- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.

Defaults to "Equivalent"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#match_policy ValidatingWebhookConfiguration#match_policy}
  */
  readonly matchPolicy?: string;
  /**
  * The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#name ValidatingWebhookConfiguration#name}
  */
  readonly name: string;
  /**
  * SideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#side_effects ValidatingWebhookConfiguration#side_effects}
  */
  readonly sideEffects?: string;
  /**
  * TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#timeout_seconds ValidatingWebhookConfiguration#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * client_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#client_config ValidatingWebhookConfiguration#client_config}
  */
  readonly clientConfig: ValidatingWebhookConfigurationWebhookClientConfig[];
  /**
  * namespace_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#namespace_selector ValidatingWebhookConfiguration#namespace_selector}
  */
  readonly namespaceSelector?: ValidatingWebhookConfigurationWebhookNamespaceSelector[];
  /**
  * object_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#object_selector ValidatingWebhookConfiguration#object_selector}
  */
  readonly objectSelector?: ValidatingWebhookConfigurationWebhookObjectSelector[];
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html#rule ValidatingWebhookConfiguration#rule}
  */
  readonly rule: ValidatingWebhookConfigurationWebhookRule[];
}

function validatingWebhookConfigurationWebhookToTerraform(struct?: ValidatingWebhookConfigurationWebhook): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    admission_review_versions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.admissionReviewVersions),
    failure_policy: cdktf.stringToTerraform(struct!.failurePolicy),
    match_policy: cdktf.stringToTerraform(struct!.matchPolicy),
    name: cdktf.stringToTerraform(struct!.name),
    side_effects: cdktf.stringToTerraform(struct!.sideEffects),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    client_config: cdktf.listMapper(validatingWebhookConfigurationWebhookClientConfigToTerraform)(struct!.clientConfig),
    namespace_selector: cdktf.listMapper(validatingWebhookConfigurationWebhookNamespaceSelectorToTerraform)(struct!.namespaceSelector),
    object_selector: cdktf.listMapper(validatingWebhookConfigurationWebhookObjectSelectorToTerraform)(struct!.objectSelector),
    rule: cdktf.listMapper(validatingWebhookConfigurationWebhookRuleToTerraform)(struct!.rule),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html kubernetes_validating_webhook_configuration}
*/
export class ValidatingWebhookConfiguration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/validating_webhook_configuration.html kubernetes_validating_webhook_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ValidatingWebhookConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ValidatingWebhookConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_validating_webhook_configuration',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._webhook = config.webhook;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: ValidatingWebhookConfigurationMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: ValidatingWebhookConfigurationMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // webhook - computed: false, optional: false, required: true
  private _webhook: ValidatingWebhookConfigurationWebhook[];
  public get webhook() {
    return this.interpolationForAttribute('webhook') as any;
  }
  public set webhook(value: ValidatingWebhookConfigurationWebhook[]) {
    this._webhook = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: cdktf.listMapper(validatingWebhookConfigurationMetadataToTerraform)(this._metadata),
      webhook: cdktf.listMapper(validatingWebhookConfigurationWebhookToTerraform)(this._webhook),
    };
  }
}
