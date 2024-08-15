# `dataKubernetesResources` Submodule <a name="`dataKubernetesResources` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesResources <a name="DataKubernetesResources" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/data-sources/resources kubernetes_resources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesResources(Construct Scope, string Id, DataKubernetesResourcesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig">DataKubernetesResourcesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig">DataKubernetesResourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetFieldSelector">ResetFieldSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetLabelSelector">ResetLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetObjects">ResetObjects</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFieldSelector` <a name="ResetFieldSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetFieldSelector"></a>

```csharp
private void ResetFieldSelector()
```

##### `ResetLabelSelector` <a name="ResetLabelSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetLabelSelector"></a>

```csharp
private void ResetLabelSelector()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetObjects` <a name="ResetObjects" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetObjects"></a>

```csharp
private void ResetObjects()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesResources resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesResources.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesResources.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesResources.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesResources.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataKubernetesResources resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataKubernetesResources to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataKubernetesResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/data-sources/resources#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.apiVersionInput">ApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fieldSelectorInput">FieldSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.labelSelectorInput">LabelSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.limitInput">LimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.objectsInput">ObjectsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.apiVersion">ApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fieldSelector">FieldSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.labelSelector">LabelSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.objects">Objects</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.apiVersionInput"></a>

```csharp
public string ApiVersionInput { get; }
```

- *Type:* string

---

##### `FieldSelectorInput`<sup>Optional</sup> <a name="FieldSelectorInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fieldSelectorInput"></a>

```csharp
public string FieldSelectorInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `LabelSelectorInput`<sup>Optional</sup> <a name="LabelSelectorInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.labelSelectorInput"></a>

```csharp
public string LabelSelectorInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.limitInput"></a>

```csharp
public double LimitInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ObjectsInput`<sup>Optional</sup> <a name="ObjectsInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.objectsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ObjectsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.apiVersion"></a>

```csharp
public string ApiVersion { get; }
```

- *Type:* string

---

##### `FieldSelector`<sup>Required</sup> <a name="FieldSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fieldSelector"></a>

```csharp
public string FieldSelector { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.labelSelector"></a>

```csharp
public string LabelSelector { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Objects`<sup>Required</sup> <a name="Objects" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.objects"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> Objects { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesResourcesConfig <a name="DataKubernetesResourcesConfig" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesResourcesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiVersion,
    string Kind,
    string FieldSelector = null,
    string LabelSelector = null,
    double Limit = null,
    string Namespace = null,
    System.Collections.Generic.IDictionary<string, object> Objects = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.apiVersion">ApiVersion</a></code> | <code>string</code> | The resource apiVersion. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.kind">Kind</a></code> | <code>string</code> | The resource kind. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.fieldSelector">FieldSelector</a></code> | <code>string</code> | A selector to restrict the list of returned objects by their fields. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.labelSelector">LabelSelector</a></code> | <code>string</code> | A selector to restrict the list of returned objects by their labels. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.limit">Limit</a></code> | <code>double</code> | Limit is a maximum number of responses to return for a list call. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.namespace">Namespace</a></code> | <code>string</code> | The resource namespace. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.objects">Objects</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | The response from the API server. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.apiVersion"></a>

```csharp
public string ApiVersion { get; set; }
```

- *Type:* string

The resource apiVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/data-sources/resources#api_version DataKubernetesResources#api_version}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

The resource kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/data-sources/resources#kind DataKubernetesResources#kind}

---

##### `FieldSelector`<sup>Optional</sup> <a name="FieldSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.fieldSelector"></a>

```csharp
public string FieldSelector { get; set; }
```

- *Type:* string

A selector to restrict the list of returned objects by their fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/data-sources/resources#field_selector DataKubernetesResources#field_selector}

---

##### `LabelSelector`<sup>Optional</sup> <a name="LabelSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.labelSelector"></a>

```csharp
public string LabelSelector { get; set; }
```

- *Type:* string

A selector to restrict the list of returned objects by their labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/data-sources/resources#label_selector DataKubernetesResources#label_selector}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.limit"></a>

```csharp
public double Limit { get; set; }
```

- *Type:* double

Limit is a maximum number of responses to return for a list call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/data-sources/resources#limit DataKubernetesResources#limit}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The resource namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/data-sources/resources#namespace DataKubernetesResources#namespace}

---

##### `Objects`<sup>Optional</sup> <a name="Objects" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.objects"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> Objects { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

The response from the API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/data-sources/resources#objects DataKubernetesResources#objects}

---



