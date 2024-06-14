# `dataKubernetesResources` Submodule <a name="`dataKubernetesResources` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesResources <a name="DataKubernetesResources" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/resources kubernetes_resources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_resources

dataKubernetesResources.DataKubernetesResources(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_version: str,
  kind: str,
  field_selector: str = None,
  label_selector: str = None,
  limit: typing.Union[int, float] = None,
  namespace: str = None,
  objects: typing.Mapping[typing.Any] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.apiVersion">api_version</a></code> | <code>str</code> | The resource apiVersion. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.kind">kind</a></code> | <code>str</code> | The resource kind. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.fieldSelector">field_selector</a></code> | <code>str</code> | A selector to restrict the list of returned objects by their fields. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.labelSelector">label_selector</a></code> | <code>str</code> | A selector to restrict the list of returned objects by their labels. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Limit is a maximum number of responses to return for a list call. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The resource namespace. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.objects">objects</a></code> | <code>typing.Mapping[typing.Any]</code> | The response from the API server. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.apiVersion"></a>

- *Type:* str

The resource apiVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/resources#api_version DataKubernetesResources#api_version}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.kind"></a>

- *Type:* str

The resource kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/resources#kind DataKubernetesResources#kind}

---

##### `field_selector`<sup>Optional</sup> <a name="field_selector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.fieldSelector"></a>

- *Type:* str

A selector to restrict the list of returned objects by their fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/resources#field_selector DataKubernetesResources#field_selector}

---

##### `label_selector`<sup>Optional</sup> <a name="label_selector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.labelSelector"></a>

- *Type:* str

A selector to restrict the list of returned objects by their labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/resources#label_selector DataKubernetesResources#label_selector}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Limit is a maximum number of responses to return for a list call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/resources#limit DataKubernetesResources#limit}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.namespace"></a>

- *Type:* str

The resource namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/resources#namespace DataKubernetesResources#namespace}

---

##### `objects`<sup>Optional</sup> <a name="objects" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.objects"></a>

- *Type:* typing.Mapping[typing.Any]

The response from the API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/resources#objects DataKubernetesResources#objects}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetFieldSelector">reset_field_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetLabelSelector">reset_label_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetObjects">reset_objects</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_field_selector` <a name="reset_field_selector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetFieldSelector"></a>

```python
def reset_field_selector() -> None
```

##### `reset_label_selector` <a name="reset_label_selector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetLabelSelector"></a>

```python
def reset_label_selector() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_objects` <a name="reset_objects" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetObjects"></a>

```python
def reset_objects() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataKubernetesResources resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_resources

dataKubernetesResources.DataKubernetesResources.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_resources

dataKubernetesResources.DataKubernetesResources.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_resources

dataKubernetesResources.DataKubernetesResources.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_resources

dataKubernetesResources.DataKubernetesResources.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataKubernetesResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataKubernetesResources to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataKubernetesResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.apiVersionInput">api_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fieldSelectorInput">field_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.labelSelectorInput">label_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.objectsInput">objects_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.apiVersion">api_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fieldSelector">field_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.labelSelector">label_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.objects">objects</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `api_version_input`<sup>Optional</sup> <a name="api_version_input" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.apiVersionInput"></a>

```python
api_version_input: str
```

- *Type:* str

---

##### `field_selector_input`<sup>Optional</sup> <a name="field_selector_input" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fieldSelectorInput"></a>

```python
field_selector_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `label_selector_input`<sup>Optional</sup> <a name="label_selector_input" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.labelSelectorInput"></a>

```python
label_selector_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `objects_input`<sup>Optional</sup> <a name="objects_input" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.objectsInput"></a>

```python
objects_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

---

##### `field_selector`<sup>Required</sup> <a name="field_selector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fieldSelector"></a>

```python
field_selector: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `label_selector`<sup>Required</sup> <a name="label_selector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.labelSelector"></a>

```python
label_selector: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `objects`<sup>Required</sup> <a name="objects" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.objects"></a>

```python
objects: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesResourcesConfig <a name="DataKubernetesResourcesConfig" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import data_kubernetes_resources

dataKubernetesResources.DataKubernetesResourcesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_version: str,
  kind: str,
  field_selector: str = None,
  label_selector: str = None,
  limit: typing.Union[int, float] = None,
  namespace: str = None,
  objects: typing.Mapping[typing.Any] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.apiVersion">api_version</a></code> | <code>str</code> | The resource apiVersion. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.kind">kind</a></code> | <code>str</code> | The resource kind. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.fieldSelector">field_selector</a></code> | <code>str</code> | A selector to restrict the list of returned objects by their fields. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.labelSelector">label_selector</a></code> | <code>str</code> | A selector to restrict the list of returned objects by their labels. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Limit is a maximum number of responses to return for a list call. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.namespace">namespace</a></code> | <code>str</code> | The resource namespace. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.objects">objects</a></code> | <code>typing.Mapping[typing.Any]</code> | The response from the API server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

The resource apiVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/resources#api_version DataKubernetesResources#api_version}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

The resource kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/resources#kind DataKubernetesResources#kind}

---

##### `field_selector`<sup>Optional</sup> <a name="field_selector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.fieldSelector"></a>

```python
field_selector: str
```

- *Type:* str

A selector to restrict the list of returned objects by their fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/resources#field_selector DataKubernetesResources#field_selector}

---

##### `label_selector`<sup>Optional</sup> <a name="label_selector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.labelSelector"></a>

```python
label_selector: str
```

- *Type:* str

A selector to restrict the list of returned objects by their labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/resources#label_selector DataKubernetesResources#label_selector}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Limit is a maximum number of responses to return for a list call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/resources#limit DataKubernetesResources#limit}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The resource namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/resources#namespace DataKubernetesResources#namespace}

---

##### `objects`<sup>Optional</sup> <a name="objects" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.objects"></a>

```python
objects: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

The response from the API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.31.0/docs/data-sources/resources#objects DataKubernetesResources#objects}

---



