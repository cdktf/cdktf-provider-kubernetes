# `dataKubernetesMutatingWebhookConfigurationV1` Submodule <a name="`dataKubernetesMutatingWebhookConfigurationV1` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesMutatingWebhookConfigurationV1 <a name="DataKubernetesMutatingWebhookConfigurationV1" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/mutating_webhook_configuration_v1 kubernetes_mutating_webhook_configuration_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1(Construct Scope, string Id, DataKubernetesMutatingWebhookConfigurationV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config">DataKubernetesMutatingWebhookConfigurationV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config">DataKubernetesMutatingWebhookConfigurationV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.putMetadata"></a>

```csharp
private void PutMetadata(DataKubernetesMutatingWebhookConfigurationV1Metadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Metadata">DataKubernetesMutatingWebhookConfigurationV1Metadata</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesMutatingWebhookConfigurationV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesMutatingWebhookConfigurationV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesMutatingWebhookConfigurationV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesMutatingWebhookConfigurationV1.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesMutatingWebhookConfigurationV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataKubernetesMutatingWebhookConfigurationV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataKubernetesMutatingWebhookConfigurationV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataKubernetesMutatingWebhookConfigurationV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/mutating_webhook_configuration_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesMutatingWebhookConfigurationV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference">DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.webhook">Webhook</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList">DataKubernetesMutatingWebhookConfigurationV1WebhookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Metadata">DataKubernetesMutatingWebhookConfigurationV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.metadata"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference">DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference</a>

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.webhook"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1WebhookList Webhook { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList">DataKubernetesMutatingWebhookConfigurationV1WebhookList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.metadataInput"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1Metadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Metadata">DataKubernetesMutatingWebhookConfigurationV1Metadata</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesMutatingWebhookConfigurationV1Config <a name="DataKubernetesMutatingWebhookConfigurationV1Config" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DataKubernetesMutatingWebhookConfigurationV1Metadata Metadata,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Metadata">DataKubernetesMutatingWebhookConfigurationV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/mutating_webhook_configuration_v1#id DataKubernetesMutatingWebhookConfigurationV1#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.metadata"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1Metadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Metadata">DataKubernetesMutatingWebhookConfigurationV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/mutating_webhook_configuration_v1#metadata DataKubernetesMutatingWebhookConfigurationV1#metadata}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/mutating_webhook_configuration_v1#id DataKubernetesMutatingWebhookConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataKubernetesMutatingWebhookConfigurationV1Metadata <a name="DataKubernetesMutatingWebhookConfigurationV1Metadata" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Metadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1Metadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Metadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the mutating webhook configuration that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Metadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the mutating webhook configuration. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Metadata.property.name">Name</a></code> | <code>string</code> | Name of the mutating webhook configuration, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Metadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the mutating webhook configuration that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/mutating_webhook_configuration_v1#annotations DataKubernetesMutatingWebhookConfigurationV1#annotations}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Metadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the mutating webhook configuration.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/mutating_webhook_configuration_v1#labels DataKubernetesMutatingWebhookConfigurationV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Metadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the mutating webhook configuration, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/mutating_webhook_configuration_v1#name DataKubernetesMutatingWebhookConfigurationV1#name}

---

### DataKubernetesMutatingWebhookConfigurationV1Webhook <a name="DataKubernetesMutatingWebhookConfigurationV1Webhook" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Webhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Webhook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1Webhook {

};
```


### DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfig <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfig" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfig {

};
```


### DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigService <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigService" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigService {

};
```


### DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelector <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelector" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelector {

};
```


### DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions {

};
```


### DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelector <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelector" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelector {

};
```


### DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions {

};
```


### DataKubernetesMutatingWebhookConfigurationV1WebhookRule <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookRule" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookRule {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference <a name="DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Metadata">DataKubernetesMutatingWebhookConfigurationV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1MetadataOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1Metadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Metadata">DataKubernetesMutatingWebhookConfigurationV1Metadata</a>

---


### DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.get"></a>

```csharp
private DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.caBundle">CaBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.service">Service</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList">DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfig">DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaBundle`<sup>Required</sup> <a name="CaBundle" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.caBundle"></a>

```csharp
public string CaBundle { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.service"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList Service { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList">DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfig">DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfig</a>

---


### DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.get"></a>

```csharp
private DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigService">DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigService">DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigService</a>

---


### DataKubernetesMutatingWebhookConfigurationV1WebhookList <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookList" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.get"></a>

```csharp
private DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.get"></a>

```csharp
private DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.get"></a>

```csharp
private DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>

---


### DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList">DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelector">DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchExpressions"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList">DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList</a>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchLabels"></a>

```csharp
public StringMap MatchLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelector">DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelector</a>

---


### DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.get"></a>

```csharp
private DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.get"></a>

```csharp
private DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>

---


### DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList">DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelector">DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchExpressions"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList">DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList</a>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchLabels"></a>

```csharp
public StringMap MatchLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelector">DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelector</a>

---


### DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.admissionReviewVersions">AdmissionReviewVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList">DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.failurePolicy">FailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.matchPolicy">MatchPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.namespaceSelector">NamespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList">DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.objectSelector">ObjectSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList">DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.reinvocationPolicy">ReinvocationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList">DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.sideEffects">SideEffects</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Webhook">DataKubernetesMutatingWebhookConfigurationV1Webhook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdmissionReviewVersions`<sup>Required</sup> <a name="AdmissionReviewVersions" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.admissionReviewVersions"></a>

```csharp
public string[] AdmissionReviewVersions { get; }
```

- *Type:* string[]

---

##### `ClientConfig`<sup>Required</sup> <a name="ClientConfig" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.clientConfig"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList ClientConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList">DataKubernetesMutatingWebhookConfigurationV1WebhookClientConfigList</a>

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.failurePolicy"></a>

```csharp
public string FailurePolicy { get; }
```

- *Type:* string

---

##### `MatchPolicy`<sup>Required</sup> <a name="MatchPolicy" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.matchPolicy"></a>

```csharp
public string MatchPolicy { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceSelector`<sup>Required</sup> <a name="NamespaceSelector" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.namespaceSelector"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList NamespaceSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList">DataKubernetesMutatingWebhookConfigurationV1WebhookNamespaceSelectorList</a>

---

##### `ObjectSelector`<sup>Required</sup> <a name="ObjectSelector" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.objectSelector"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList ObjectSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList">DataKubernetesMutatingWebhookConfigurationV1WebhookObjectSelectorList</a>

---

##### `ReinvocationPolicy`<sup>Required</sup> <a name="ReinvocationPolicy" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.reinvocationPolicy"></a>

```csharp
public string ReinvocationPolicy { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.rule"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList">DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList</a>

---

##### `SideEffects`<sup>Required</sup> <a name="SideEffects" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.sideEffects"></a>

```csharp
public string SideEffects { get; }
```

- *Type:* string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1Webhook InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1Webhook">DataKubernetesMutatingWebhookConfigurationV1Webhook</a>

---


### DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.get"></a>

```csharp
private DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference <a name="DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiGroups">ApiGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiVersions">ApiVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.property.operations">Operations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRule">DataKubernetesMutatingWebhookConfigurationV1WebhookRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiGroups`<sup>Required</sup> <a name="ApiGroups" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiGroups"></a>

```csharp
public string[] ApiGroups { get; }
```

- *Type:* string[]

---

##### `ApiVersions`<sup>Required</sup> <a name="ApiVersions" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiVersions"></a>

```csharp
public string[] ApiVersions { get; }
```

- *Type:* string[]

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.property.operations"></a>

```csharp
public string[] Operations { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRuleOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesMutatingWebhookConfigurationV1WebhookRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesMutatingWebhookConfigurationV1.DataKubernetesMutatingWebhookConfigurationV1WebhookRule">DataKubernetesMutatingWebhookConfigurationV1WebhookRule</a>

---



